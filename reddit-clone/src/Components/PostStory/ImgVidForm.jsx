import React from "react";

function ImgVidForm() {
  const imageRef = React.useRef();
  const [title2, setTitle2] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(imageRef.current.files[0]);
    try {
      const formdata = new FormData();
      formdata.append(
        "image",
        imageRef.current.files[0],
        imageRef.current.files[0].name
      );

      const res = await fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
          Authorization: "Client-ID 4433e1304c60685",
        },
        body: formdata,
      }).then((res) => res.json());

      console.log("response", res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Enter Title"
          value={title2}
          onChange={(e) => setTitle2(e.target.value)}
        />
        <input ref={imageRef} type="file" />
        <input type="submit" />
      </form>
    </div>
  );
}

export { ImgVidForm };
