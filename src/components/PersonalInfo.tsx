import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.number(),
});

type PersonalInfo = z.infer<typeof schema>;

const PersonalInfo = () => {
  const { register } = useForm<PersonalInfo>({ resolver: zodResolver(schema) });

  return (
    <form>
      <h2 className="step__heading">Personal Info</h2>
      <p className="step__info">
        Please provide your name, email address, and phone number
      </p>

      <div className="step__container">
        <label className="step__heading">Name</label>
        <input
          required
          {...register("name")}
          className="step__input"
          placeholder="e.g Stephen King"
          type="text"
        />
      </div>

      <div className="step__container">
        <label className="step__heading">Email Address</label>
        <input
          required
          {...register("email")}
          className="step__input"
          placeholder="e.g stephenking@lorem.com"
          type="email"
        />
      </div>

      <div className="step__container">
        <label className="step__heading">Phone Number</label>
        <input
          required
          {...register("phone")}
          className="step__input"
          placeholder="e.g. +1 234 567 890"
          type="number"
        />
      </div>

      <button className="btn__next">Next Step</button>
    </form>
  );
};

export default PersonalInfo;
