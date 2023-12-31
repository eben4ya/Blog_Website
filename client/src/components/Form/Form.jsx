const Form = ({ title = "" }) => {
  return (
    <form className="mx-auto my-0 max-w-[400px]" action="">
      <h1 className="m-0 mb-[20px] text-center text-[1.8rem] font-bold">
        {title}
      </h1>
      <input
        className="mb-[5px] block w-[100%] rounded-[5px] border-[2px] border-solid border-[#ddd] bg-white px-[7px] py-[5px]"
        type="text"
        placeholder="username"
      />
      <input
        className="mb-[5px] block w-[100%] rounded-[5px] border-[2px] border-solid border-[#ddd] bg-white px-[7px] py-[5px]"
        type="text"
        placeholder="password"
      />
      <button
        className="block w-full rounded-[5px] border-0 bg-[#555] py-[7px] text-white "
        type="button"
      >
        {title}
      </button>
    </form>
  );
};

export default Form;
