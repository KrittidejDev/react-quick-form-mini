import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";
import { MOVIE_DATA_OPTION } from "@/constants/movieData";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "โปรดใส่ชื่อของคุณ",
  }),
  email: z
    .string()
    .min(2, {
      message: "โปรดใส่อีเมลของคุณ",
    })
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "รูปแบบอีเมลไม่ถูกต้อง"
    ),
  movies: z.string().min(1, {
    message: "กรุณาเลือกหนังที่คุณชอบ",
  }),
  desc: z.string().optional(),
});

const MovieSurveyForm = ({ onSubmit }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      movies: "",
      desc: "",
    },
  });

  const _handleSubmit = (data) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(_handleSubmit)}
        className="space-y-8 p-5 w-[50%] "
      >
        <div className="text-4xl font-bold text-center">Movie Survey Form</div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ชื่อ *</FormLabel>
              <FormControl>
                <Input placeholder="Please enter your name ..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>อีเมล์ *</FormLabel>
              <FormControl>
                <Input placeholder="Please enter your email ..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="movies"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>เลือกภาพยนตร์ที่คุณชอบ *</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col"
                >
                  {MOVIE_DATA_OPTION.map((e) => (
                    <FormItem key={e.title} className="flex items-center gap-3">
                      <FormControl>
                        <RadioGroupItem value={e.title} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        เรื่อง {e.title} ปี: {e.year} กำกับโดย: {e.director}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ความคิดเห็นเกี่ยวกับภาพยนตร์</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="แสดงความคิดเห็นเกี่ยวกับภาพยนตร์ที่คุณเลือก"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2.5">
          <Button
            className="text-black bg-white border-black border-1 hover:text-white"
            type="button"
            onClick={() => form.reset()}
          >
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default MovieSurveyForm;
