import Swal from 'sweetalert2'

export const useSwal = Swal

const useSweetAlert = {
  info: ({ title, text = '', html = '' }) => {
    useSwal.fire({
      title,
      text,
      html,
      icon: 'info',
    })
  },
}

export default useSweetAlert
