import CryptoJS from "crypto-js";
import axios from "axios";

const decryptValue = (value) => {
  try {
    return CryptoJS.AES.decrypt(
      decodeURIComponent(value),
      "*&&^##/ElMatary/Dashboard/Users/##^&&*"
    ).toString(CryptoJS.enc.Utf8);
  } catch (error) {
    return null;
  }
};

const getLoggedInUserData = () => {
  try {
    const encryptedValue = localStorage.getItem("authUser");
    if (!encryptedValue) {
      return null;
    }

    return JSON.parse(decryptValue(encryptedValue));
  } catch (err) {
    return null;
  }
};

const updateUserData = async () => {
  try {
    const dataUser = getLoggedInUserData();
    const response = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/dashboard_users/select_user_data.php",
      { user_id: dataUser?.user_id }
    );

    if (response?.data?.status === "success") {
      const encryptedValue = CryptoJS.AES.encrypt(
        JSON.stringify(response?.data?.message),
        "*&&^##/ElMatary/Dashboard/Users/##^&&*"
      ).toString();

      localStorage.setItem("authUser", encodeURIComponent(encryptedValue));
    } else {
      localStorage.removeItem("authUser");
      // window.location.href = "/login";
    }
  } catch (error) {
    console.error("Error updating user data:", error);
  }
};

// Execute the promise
updateUserData();

// Export the userData
export let userData = getLoggedInUserData();

export const permissions = [
  {
    id: 1,
    label: "course_manage",
    values: [
      { id: 1, value: "add_course" },
      { id: 2, value: "edit_course" },
      { id: 3, value: "duplicate_course" },
      { id: 4, value: "show_hide" },
      { id: 10, value: "Assign Students" },
    ],
  },
  {
    id: 2,
    label: "tasks_manage",
    values: [
      { id: 2, value: "view_task_results" },
      { id: 1, value: "add_task" },
      { id: 3, value: "end_task" },
      { id: 4, value: "rate_task" },
    ],
  },
  {
    id: 3,
    label: "unit_manage",
    values: [
      { id: 4, value: "view units" },
      { id: 1, value: "update_hidden" },
      { id: 2, value: "view_answered_students" },
      { id: 3, value: "copy_unit" },
    ],
  },
  {
    id: 4,
    label: "unit_videos",
    values: [
      { id: 1, value: "assign" },
      { id: 2, value: "unassign" },
      { id: 3, value: "update_title" },
      { id: 4, value: "update_free" },
      { id: 5, value: "show_hide" },
      { id: 6, value: "sort_videos" },
    ],
  },
  {
    id: 5,
    label: "unit_ebooks",
    values: [
      { id: 1, value: "assign" },
      { id: 2, value: "unassign" },
      { id: 3, value: "update_title" },
      { id: 4, value: "update_free" },
      { id: 5, value: "show_hide" },
    ],
  },
  {
    id: 6,
    label: "MCQs_manage",
    values: [
      { id: 1, value: "add_MCQ" },
      { id: 2, value: "Upload_excel" },
      { id: 3, value: "update" },
      { id: 4, value: "show_hide" },
      { id: 5, value: "import" },
      { id: 7, value: "show_answers" },
      { id: 6, value: "add_answers" },
    ],
  },
  {
    id: 7,
    label: "flash_cards",
    values: [
      { id: 1, value: "add" },
      { id: 2, value: "show_hide" },
      { id: 3, value: "copy" },
      { id: 4, value: "upload_excel" },
    ],
  },
  {
    id: 8,
    label: "tweets",
    values: [
      { id: 1, value: "add" },
      { id: 2, value: "show_hide" },
      { id: 3, value: "copy" },
      { id: 4, value: "upload_excel" },
    ],
  },
  {
    id: 9,
    label: "wrq",
    values: [
      { id: 1, value: "add" },
      { id: 2, value: "show_hide" },
      { id: 3, value: "copy" },
      { id: 4, value: "upload_excel" },
    ],
  },
  {
    id: 10,
    label: "cases",
    values: [
      { id: 1, value: "add" },
      { id: 2, value: "show_hide" },
      { id: 3, value: "copy" },
      { id: 4, value: "upload_excel" },
    ],
  },
  {
    id: 11,
    label: "images and folders",
    values: [
      { id: 3, value: "view_images" },
      { id: 1, value: "upload_images" },
      { id: 2, value: "add_folders" },
    ],
  },
  {
    id: 12,
    label: "ebook_store",
    values: [
      { id: 5, value: "View Books" },
      { id: 1, value: "add_ebooks" },
      { id: 2, value: "edit" },
      { id: 3, value: "copy" },
      { id: 4, value: "show_hide" },
      { id: 6, value: "show book" },
    ],
  },
  {
    id: 13,
    label: "users",
    values: [
      { id: 1, value: "show" },
      { id: 2, value: "add" },
      { id: 3, value: "disable" },
    ],
  },
  {
    id: 14,
    label: "cards",
    values: [{ id: 1, value: "add_cards" }],
  },
  {
    id: 15,
    label: "videos",
    values: [
      { id: 1, value: "add" },
      // { id: 2, value: 'show_hide' },
      { id: 3, value: "show and copy video_source_id" },
      { id: 4, value: "edit" },
      { id: 5, value: "view videos" },
      { id: 6, value: "assign" },
      { id: 7, value: "view questions" },
    ],
  },
  {
    id: 16,
    label: "univs",
    values: [
      { id: 4, value: "view all" },
      { id: 1, value: "add" },
      { id: 2, value: "show_hide" },
      { id: 3, value: "edit" },
    ],
  },
  {
    id: 17,
    label: "grades",
    values: [
      { id: 4, value: "view all" },
      { id: 1, value: "add" },
      { id: 2, value: "show_hide" },
      { id: 3, value: "edit" },
    ],
  },
  {
    id: 18,
    label: "supscription",
    values: [
      { id: 1, value: "show subscription" },
      { id: 2, value: "show Canceled subscription" },
      { id: 3, value: "cancel" },
    ],
  },
  {
    id: 19,
    label: "students",
    values: [
      { id: 1, value: "show" },
      { id: 2, value: "cancel_sub" },
      { id: 3, value: "reset_seriel" },
      { id: 4, value: "headPhone" },
      { id: 5, value: "sim" },
      { id: 6, value: "block" },
      { id: 7, value: "view subscription" },
    ],
  },
  {
    id: 20,
    label: "exam",
    values: [
      { id: 7, value: "Show exams" },
      { id: 8, value: "show questions" },
      { id: 1, value: "add" },
      { id: 2, value: "show_results" },
      { id: 3, value: "assign" },
      { id: 4, value: "add qs" },
      { id: 5, value: "edit qs" },
      { id: 6, value: "import qs" },
      { id: 9, value: "show_hide_question" },
    ],
  },
  {
    id: 21,
    label: "reports",
    values: [
      { id: 1, value: "view all reports" },
      { id: 2, value: "reply" },
      { id: 3, value: "correct" },
      { id: 4, value: "solve" },
      { id: 5, value: "contact" },
      { id: 6, value: "view report" },
    ],
  },
  {
    id: 22,
    label: "app_info",
    values: [
      { id: 1, value: "update_policy" },
      { id: 2, value: "addCallCenter" },
      { id: 3, value: "update call center" },
      { id: 4, value: "delete call Center" },

      // { id: 4, value: 'show_hide' },
      { id: 5, value: "show call center" },
      { id: 6, value: "show policy" },
    ],
  },
  {
    id: 23,
    label: "lives",
    values: [
      { id: 1, value: "create_live" },
      { id: 2, value: "end_live" },
    ],
  },
  {
    id: 24,
    label: "exams",
    values: [
      { id: 2, value: "View Exams" },
      { id: 1, value: "show_exams_results" },
    ],
  },
  {
    id: 25,
    label: "inquires",
    values: [
      { id: 1, value: "add_reply" },
      { id: 2, value: "change_status" },
      { id: 3, value: "Show Inquires" },
    ],
  },
];

export const transformedPermissions = permissions.reduce((acc, permission) => {
  acc[permission.id] = permission.values.map((item) => item.id);
  return acc;
}, {});

function convertStringToObject(str) {
  const subObject = {};
  if (str && str.length) {
    const pairs = str.split("**");
    pairs.forEach((pair) => {
      const [categoryId, valueId] = pair.split("_");

      if (!subObject[categoryId]) {
        subObject[categoryId] = [];
      }

      subObject[categoryId].push(parseInt(valueId, 10));
    });
  }
  return subObject;
}
// ===============================================================

export const numberedObject = (xxxString) => convertStringToObject(xxxString);

// ================================================================
function convertToPermissionsObject(subObject, originalPermissions) {
  const permissionsObject = [];

  for (const categoryId in subObject) {
    if (subObject.hasOwnProperty(categoryId)) {
      const values = subObject[categoryId];
      const category = originalPermissions.find(
        (item) => item.id === parseInt(categoryId, 10)
      );

      if (category) {
        const newCategory = {
          id: category.id,
          label: category.label,
          values: values.map((valueId) => {
            const value = category.values.find(
              (val) => val.id === parseInt(valueId, 10)
            );
            return { id: value.id, value: value.value };
          }),
        };

        permissionsObject.push(newCategory);
      }
    }
  }

  return permissionsObject;
}
const subObject = {
  1: [2],
  2: [1, 3],
  3: [2, 1],
  4: [2],
};

export const wordedObject = convertToPermissionsObject(subObject, permissions);
