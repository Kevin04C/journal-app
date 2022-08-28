
export const fileUpload = async (file) => {

  if(!file) return new Error("No hay archivos")

  const cloudUrl = "https://api.cloudinary.com/v1_1/orealydev/upload";
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "journal-app");
  
  try {
    const res = await fetch(cloudUrl, {
      method: "POST",
      body: formData
    })

    if(!res.ok) throw new Error ("Hubo un error al subir ka imagen")

    const { secure_url } = await res.json()
  
    return secure_url

  } catch (error) {
    console.log(error.message)
    throw new Error(error.message)
  }

}