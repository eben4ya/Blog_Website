import axios from "axios";
import { useState } from "react";

const Form = ({ title = "", endpoint = "" }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      try {
        const response = await axios.post(`http://localhost:5000/${endpoint}`, {
          username: username,
          password: password,
        });
        console.log(response);
        if (response.status === 200) {
          alert(
            title === "Login"
              ? `login successfully`
              : `registration successfull`,
          );
        } else {
          alert(
            title === "Login"
              ? "Wrong username or password"
              : "Username already exists",
          );
        }
        setUsername("");
        setPassword("");
      } catch (err) {
        alert(`${title} failed. Try again later `);
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto my-0 max-w-[400px]"
      action=""
    >
      <h1 className="m-0 mb-[20px] text-center text-[1.8rem] font-bold">
        {title}
      </h1>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-[5px] block w-[100%] rounded-[5px] border-[2px] border-solid border-[#ddd] bg-white px-[7px] py-[5px] text-black"
        type="text"
        placeholder="username"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-[5px] block w-[100%] rounded-[5px] border-[2px] border-solid border-[#ddd] bg-white px-[7px] py-[5px] text-black"
        type="text"
        placeholder="password"
      />
      <button
        className="block w-full rounded-[5px] border-0 bg-[#555] py-[7px] text-white "
        type="submit"
      >
        {title}
      </button>
    </form>
  );
};

export default Form;
