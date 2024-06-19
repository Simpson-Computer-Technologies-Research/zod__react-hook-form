import "./App.css";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/Dropdown";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    role: "user",
  });

  const schema = z.object({
    firstName: z.string().min(2).max(25),
    lastName: z.string().max(25).optional(),
    role: z.enum(["admin", "user"]),
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: data,
    resolver: zodResolver(schema),
  });

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start p-12">
      <form
        onSubmit={handleSubmit((data) => {
          setData(data);
        })}
        className="relative flex w-full max-w-96 flex-col items-start justify-start gap-4"
      >
        <Input
          {...register("firstName", { required: true })}
          placeholder="First Name"
          errorMessage={errors.firstName?.message}
        />

        <Input
          {...register("lastName")}
          placeholder="Last Name"
          errorMessage={errors.lastName?.message}
        />

        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">
            <Button className="w-full">Select role ({watch("role")})</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select a role</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={watch("role")}
              onValueChange={(value) => {
                setValue("role", value);
              }}
            >
              <DropdownMenuRadioItem value="admin">Admin</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="user">User</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button type="submit">Submit</Button>
      </form>

      <pre className="mt-4 w-full max-w-96 rounded-md bg-gray-200 p-4">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
