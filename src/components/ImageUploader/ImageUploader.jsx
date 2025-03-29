import { useRef } from "react";
// import DefaultImage from "../../assets/upload.png";
import LoadingPng from "../../assets/loading.gif";

import "../ImageUploader/ImageUploader.css"
import { ImFolderUpload } from "react-icons/im";
import { useNotes } from "../NotesContext";
const ImageUpload = () => {

     const {imageUrl,setImageUrl,setIsSaving} = useNotes();
    //  this set the default and uploaded image on the UI.
    // const [image,setImage] = useState(DefaultImage);
    //  referece of the input field;
    let inputRef = useRef();
     
    // this handle the click on the input field( reason: we are hidding the input vield and on click on the btn(background is the img) we are provoking the input field os we can upload the image )
    const handleImageUpload = (event)=>{
        event.preventDefault();
        inputRef.current.click();
        console.log('clicked on handleImageUpload-----')
    }
    // this handles the image selected by user.
    const handleUserImage =async ()=>{
        console.log('clicked on UserIMage upload started++++++++++++-----')

        const uploadedImg = inputRef.current.files[0]; //  uploadedImg = have refrence of the file uploaded in the input field.
         if(!uploadedImg) return;                                                // this is a builtin function of javascript which creates a temporary URL of the file uploaded in this case image uploaded by the user.
        //  const cashedURL = URL.createObjectURL(uploadedImg);// how this works is when we select a file it exist in the memory as blob and just generate a URL  pointing to that blob for previewing and we are using this for updating the UI.
                                                      //  This update the UI with the uploaded img.
        // setImage(cashedURL);

        const formData = new FormData();
        formData.append("file",uploadedImg);
        formData.append("upload_preset",import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
        try {
            console.log("fetching started")
            console.log(import.meta.env.VITE_CLOUDINARY_CLOUD_NAME, import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
            setIsSaving(true);
            setImageUrl(LoadingPng);
            const res = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,{
                method:"POST",
                body:formData,
            })
            console.log(res,"got the response")
            const data = await res.json();
            console.log(data,"got the data------------- response")

            const resImageUrl = data.secure_url
            console.log(resImageUrl,"got the URL")
            setImageUrl(resImageUrl);
            setIsSaving(false);
        // setImage(resImageUrl);
        } catch (error) {
            console.log(error,":error at cloudianary imageUpload.jsx")
        }
        
    }
    return ( 

        <div className="image-uploader">
            <form id="form" encType="multipart/form-data">
            <button
            onClick={handleImageUpload}
            type="button"
            className="submit-image-btn" >
            <img src={imageUrl} alt="upload image" className="default-image" />
            <ImFolderUpload className="upload-icon" />
            </button>
            {imageUrl && <div className="remove-img" onClick={()=>setImageUrl("")}><span>remove</span></div>}
            
            <input
               hidden // hides the input vield from UI.
               ref={inputRef} // this is used as ref to click on it.
               type="file"
               id="file"
               onChange={handleUserImage}
             />
            </form>
        </div>
     );
}
 
export default ImageUpload;