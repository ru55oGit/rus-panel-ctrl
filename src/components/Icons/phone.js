import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Phone = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }}>
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.856 13.1444C9.68602 11.9744 8.80402 10.6644 8.21802 9.33536C8.09402 9.05436 8.16702 8.72536 8.38402 8.50836L9.20302 7.69036C9.87402 7.01936 9.87402 6.07036 9.28802 5.48436L8.11402 4.31036C7.33302 3.52936 6.06702 3.52936 5.28602 4.31036L4.63402 4.96236C3.89302 5.70336 3.58402 6.77236 3.78402 7.83236C4.27802 10.4454 5.79602 13.3064 8.24502 15.7554C10.694 18.2044 13.555 19.7224 16.168 20.2164C17.228 20.4164 18.297 20.1074 19.038 19.3664L19.689 18.7154C20.47 17.9344 20.47 16.6684 19.689 15.8874L18.516 14.7144C17.93 14.1284 16.98 14.1284 16.395 14.7144L15.492 15.6184C15.275 15.8354 14.946 15.9084 14.665 15.7844C13.336 15.1974 12.026 14.3144 10.856 13.1444V13.1444Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </SvgIcon>
)

export default Phone

Phone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Phone.defaultProps = {
  color: theme.palette.text.primary,
  size: 1.5,
}
