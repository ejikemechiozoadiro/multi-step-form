import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./PersonalInfo.css";

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
      <h2 className="person__info-heading">Personal Info</h2>
      <p className="person__info">
        Please provide your name, email address, and phone number
      </p>

      <div className="person__container">
        <label className="person__name ">Name</label>
        <input
          required
          {...register("name")}
          className="person__input"
          placeholder="e.g Stephen King"
          type="text"
        />
      </div>

      <div className="person__container">
        <label className="person__email ">Email Address</label>
        <input
          {...register("email")}
          className="person__input"
          placeholder="e.g stephenking@lorem.com"
          type="email"
        />
      </div>

      <div className="person__container">
        <label className="person__number ">Phone Number</label>
        <input
          {...register("phone")}
          className="person__input"
          placeholder="e.g. +1 234 567 890"
          type="number"
        />
      </div>

      <div className="btn-container">
        <button className="btn">Next Step</button>
      </div>
    </form>
  );
};

export default PersonalInfo;
