import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Discounts = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }} viewBox="0 0 24 24">
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M3.495 13.464L4.69 15.028L4.948 16.975C5.091 18.055 5.94 18.905 7.02 19.049L8.972 19.31L10.535 20.504C11.4 21.165 12.599 21.165 13.464 20.504L15.028 19.309H15.026L16.974 19.051C18.054 18.908 18.904 18.059 19.048 16.979L19.308 15.027C19.308 15.028 19.912 14.237 20.503 13.464C21.164 12.599 21.163 11.4 20.503 10.535L19.31 8.97099L19.052 7.02399C18.909 5.94399 18.06 5.09399 16.98 4.94999L15.027 4.68999L13.464 3.49599C12.599 2.83499 11.4 2.83499 10.535 3.49599L8.971 4.68999H8.973L7.025 4.94899C5.945 5.09199 5.095 5.94099 4.951 7.02099L4.69 8.97299C4.69 8.97199 4.086 9.76299 3.495 10.536C2.835 11.4 2.835 12.6 3.495 13.464V13.464Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M9.89905 14.0999L14.099 9.8999"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M14.289 13.9531C14.383 14.0471 14.383 14.1991 14.289 14.2921C14.195 14.3861 14.043 14.3861 13.95 14.2921C13.856 14.1981 13.856 14.0461 13.95 13.9531C14.043 13.8591 14.195 13.8591 14.289 13.9531"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10.049 9.708C10.143 9.802 10.143 9.954 10.049 10.047C9.95495 10.141 9.80295 10.141 9.70995 10.047C9.61695 9.953 9.61595 9.801 9.70995 9.708C9.80395 9.615 9.95595 9.614 10.049 9.708"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Discounts

Discounts.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Discounts.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
