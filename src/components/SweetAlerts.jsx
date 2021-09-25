import Swal from "sweetalert2";

export const Confirmer = Swal.mixin({
  icon: "warning",
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
});

export const ErrorToaster = Swal.mixin({
  icon: "error",
  position: "top-start",
  toast: true,
  timer: 4000,
  showConfirmButton: false,
});

export const SuccessToaster = Swal.mixin({
  icon: "success",
  position: "top-start",
  toast: true,
  timer: 4000,
  showConfirmButton: false,
});

export default {
  SuccessToaster,
  ErrorToaster,
  Confirmer,
};
