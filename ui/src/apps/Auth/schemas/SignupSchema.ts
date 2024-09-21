import z from 'zod';

export const SignupSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(40),
  email: z
    .string()
    .email()
    .min(3)
    .max(320),
  password: z
    .string()
    .min(8),
  confirmPassword: z
    .string()
    .min(8),
});

export type Signup = z.infer<typeof SignupSchema>;