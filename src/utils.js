import axios from "axios";
import { toast } from "react-toastify";

export const uploadFile = async (image) => {
  const formData = new FormData();
  if (image) {
    formData.append("image", image);
    const url = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/image_uploader.php",
      formData
    );
    if (url && url?.length) {
      return url;
    } else {
      toast.error(url?.message);
    }
  } else {
    toast.error("Please Upload File");
  }
};
