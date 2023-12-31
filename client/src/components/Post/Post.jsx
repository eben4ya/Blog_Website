const Post = () => {
  return (
    <div className="mb-[30px] grid grid-cols-2 gap-[20px]">
      <div>
        <img
          className="w-[60%] max-w-[100%]"
          src="./public//img/iconHero.png"
          alt="icon hero"
        />
      </div>
      <div>
        <h2 className="m-0 text-[1.8rem] font-bold">
          Lebih Mudah Jalani Peranmu sebagai Orang Tua dengan EzParenting
        </h2>
        <p className="mx-auto my-[6px] flex flex-row gap-[10px] text-[0.7rem] font-bold text-[#888]">
          <a className="text-[#333]" href="">
            Benaya Imanuela
          </a>
          <time>2023-01-06 16.45</time>
        </p>
        <p className="mx-auto my-[10px] leading-[1.4rem]">
          EzParenting hadir untuk mendampingi orang tua menjalani perannya dalam
          mengasuh dan mendidik anak usia dini.
        </p>
      </div>
    </div>
  );
};

export default Post;
