import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'

const Amex = ({ size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }} viewBox="0 0 26 26">
    <svg
      fill="none"
      height="26"
      viewBox="0 0 26 26"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.728 25.727H13.0772H0.273438V12.8733V0.272461H12.9067H25.728V12.9989V25.727Z"
        fill="white"
      />
      <path
        d="M25.728 25.727V21.6934H22.6568L21.0763 19.9465L19.4866 21.6934H9.36221V13.5454H6.09637L10.1475 4.37264H14.0572L15.4522 7.51536V4.37264H20.291L21.1312 6.74091L21.9772 4.37264H25.728V0.272461H0.273438V25.727H25.728ZM23.1742 20.6735H25.728L22.3498 17.0916L25.728 13.5496H23.215L21.1287 15.828L19.0632 13.5479H16.5086L19.8668 17.1099L16.5086 20.6719H18.99L21.0863 18.3718L23.1725 20.6719L23.1742 20.6735ZM23.7715 17.0966L25.728 19.1762V15.0303L23.7715 17.0941V17.0966ZM12.3868 19.0248V17.916H16.4113V16.308H12.3868V15.1983H16.5086V13.5496H10.4436V20.6735H16.5086V19.0248H12.3868ZM23.8048 12.5164H25.728V5.39249H22.7333L21.1353 9.82956L19.5507 5.39249H16.5078V12.5164H18.431V7.5295L20.2611 12.5206H21.9714L23.8014 7.52368V12.5206L23.8048 12.5164ZM14.3217 12.5164H16.5094L13.3651 5.39249H10.8604L7.71515 12.5164H9.85217L10.4428 11.0915H13.7194L14.32 12.5164H14.3217ZM13.0498 9.49349H11.1141L12.0815 7.16432L13.0481 9.49349H13.0498Z"
        fill="#0079C1"
      />
    </svg>
  </SvgIcon>
)

export default Amex

Amex.propTypes = {
  size: PropTypes.number,
}

Amex.defaultProps = {
  size: 1.5,
}