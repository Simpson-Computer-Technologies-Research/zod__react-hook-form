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

export default function App() {
  const schema = z.object({
    firstName: z.string().min(3).max(25),
    lastName: z.string().max(25).optional(),
    role: z.enum(["admin", "user"]),
  });

  const form = useForm({
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      role: "admin",
    },
    resolver: zodResolver(schema),
  });

  const { register, handleSubmit, setValue, formState, watch } = form;

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start p-12">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="relative flex w-full max-w-96 flex-col items-start justify-start gap-4"
      >
        <Input
          {...register("firstName")}
          placeholder="First Name"
          errorMessage={formState.errors.firstName?.message}
        />

        <Input
          {...register("lastName")}
          placeholder="Last Name"
          errorMessage={formState.errors.lastName?.message}
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
    </main>
  );
}
