import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'
import theme from 'theme'

const Chat = ({ color, size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }} viewBox="0 0 64 64">
    <svg
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.1448 14H10.1978C6.7827 14 4 16.7855 4 20.204V36.6213C4 40.0399 6.7827 42.8253 10.1978 42.8253H10.6616C13.0227 42.8253 14.7092 45.2309 13.7816 47.3834C13.7816 47.4256 13.7394 47.4256 13.7394 47.4678C13.4021 48.2274 14.1189 49.0293 14.8778 48.6917C17.2389 47.721 20.1902 46.2438 21.6659 44.1758C22.2983 43.3318 23.3524 42.8253 24.4064 42.8253H41.1448C44.5599 42.8253 47.3426 40.0399 47.3426 36.6213V20.204C47.3426 16.7855 44.6021 14 41.1448 14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <rect
        fill="#008A99"
        height="2.08696"
        opacity="0.2"
        rx="1.04348"
        width="32.8687"
        x="9.28241"
        y="22.2623"
      />
      <rect
        fill="#008A99"
        height="2.08696"
        opacity="0.2"
        rx="1.04348"
        width="32.8687"
        x="9.28241"
        y="27.5737"
      />
      <rect
        fill="#008A99"
        height="2.08696"
        opacity="0.2"
        rx="1.04348"
        width="18.7821"
        x="9.28241"
        y="32.8853"
      />
      <path
        d="M39.052 33.826H56.0881C57.9681 33.826 59.5 35.3725 59.5 37.2704V43.2546C59.5 45.1525 57.9681 46.699 56.0881 46.699H55.8328C54.5331 46.699 53.6047 48.0345 54.1153 49.2295C54.1153 49.253 54.1385 49.253 54.1385 49.2764C54.3242 49.6981 53.9296 50.1433 53.5118 49.9559C52.2121 49.417 50.5874 48.5969 49.775 47.4488C49.4269 46.9802 48.8466 46.699 48.2664 46.699H39.052C37.172 46.699 35.6402 45.1525 35.6402 43.2546V37.2704C35.6402 35.3725 37.1488 33.826 39.052 33.826Z"
        fill="white"
      />
      <path
        d="M51.8561 48.2935C52.3082 48.5741 52.7963 48.8208 53.2716 49.0352C52.9481 47.4722 54.1963 45.949 55.8328 45.949H56.0881C57.5472 45.949 58.75 44.745 58.75 43.2546V37.2704C58.75 35.78 57.5472 34.576 56.0881 34.576H39.052C37.573 34.576 36.3902 35.7766 36.3902 37.2704V43.2546C36.3902 44.745 37.5929 45.949 39.052 45.949H48.2664C49.0755 45.949 49.8825 46.3358 50.3771 47.0015L50.3823 47.0085L50.3873 47.0156C50.7121 47.4746 51.228 47.9037 51.8561 48.2935Z"
        fill="#EDF8F9"
        stroke={color}
        strokeWidth="1.5"
      />
      <ellipse
        cx="47.5701"
        cy="40.0869"
        fill="white"
        rx="1.03738"
        ry="1.04348"
        stroke={color}
        strokeWidth="0.75"
      />
      <ellipse
        cx="52.757"
        cy="40.0869"
        fill="white"
        rx="1.03738"
        ry="1.04348"
        stroke={color}
        strokeWidth="0.75"
      />
      <ellipse
        cx="42.3832"
        cy="40.0869"
        fill="white"
        rx="1.03738"
        ry="1.04348"
        stroke={color}
        strokeWidth="0.75"
      />
    </svg>
  </SvgIcon>
)

export default Chat

Chat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Chat.defaultProps = {
  color: theme.palette.info.dark,
  size: 4,
}
