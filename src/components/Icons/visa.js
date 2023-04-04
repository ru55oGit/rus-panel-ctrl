import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'

const Visa = ({ size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }} viewBox="0 0 72 24">
    <svg
      height="24"
      viewBox="0 0 72 24"
      width="72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          gradientUnits="objectBoundingBox"
          id="linear-gradient"
          x2="1"
          y1="1"
          y2="1"
        >
          <stop offset="0" stopColor="#231f5d" />
          <stop offset="1" stopColor="#024da1" />
        </linearGradient>
      </defs>
      <g id="Group_1293" transform="translate(-84 -40.001)">
        <path
          d="M-8659.516-1805h-.181l-.166,0a17.314,17.314,0,0,1-6.215-1.19l-.087-.042,1.052-5.086.475.227a11.342,11.342,0,0,0,5.268,1.241h.235l.08,0a5.08,5.08,0,0,0,2.282-.56,1.969,1.969,0,0,0,1.116-1.634l0-.076v-.052c-.018-.957-.747-1.667-2.789-2.714l-.472-.24c-2.068-1.073-4.82-2.871-4.85-6.077v-.118l0-.133a6.889,6.889,0,0,1,2.742-5.375,11.218,11.218,0,0,1,6.827-2.16l.168,0h.175l.2,0a14.981,14.981,0,0,1,4.9.928l.264.1-1.021,4.922-.127-.061a11.1,11.1,0,0,0-4.614-1.038,7.936,7.936,0,0,0-.908.048l-.088.011-.1.015a3.454,3.454,0,0,0-1.757.73,1.679,1.679,0,0,0-.608,1.148v.133c.042,1.054,1.353,1.764,2.87,2.586,2.315,1.254,5.2,2.815,5.277,6.352l0,.181,0,.144a7.116,7.116,0,0,1-2.778,5.637A11.72,11.72,0,0,1-8659.516-1805Zm15.756-.362h-6.11l8.73-21.509.035-.081a2.65,2.65,0,0,1,2.355-1.62l.088,0h4.964l4.7,23.211h-5.378l-.705-3.468h-7.462l-1.214,3.468Zm5.487-16.854-2.9,8.87h4.563l-1.666-8.87Zm-31.888,16.854h-5.82l4.813-23.212h5.817l-4.811,23.212Zm-12.93,0h-6.149l-4.662-18.62a2.477,2.477,0,0,0-1.286-1.9l-.073-.042-.129-.072a23.779,23.779,0,0,0-5.425-1.861l-.186-.044.137-.673h9.9l.074,0a2.725,2.725,0,0,1,2.59,2.275l.02.089,2.448,13.432,6.055-15.8h6.112Z"
          fill="url(#linear-gradient)"
          id="Exclusion_1"
          transform="translate(8785 1869)"
        />
      </g>
    </svg>
  </SvgIcon>
)

export default Visa

Visa.propTypes = {
  size: PropTypes.number,
}

Visa.defaultProps = {
  size: 1.5,
}