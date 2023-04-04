import SvgIcon from '@mui/material/SvgIcon'
import PropTypes from 'prop-types'

const Logo = ({ size }) => (
  <SvgIcon sx={{ fontSize: `${size}rem` }} viewBox="0 0 64 64">
    <svg
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M59.9982 13.424C59.9737 8.21532 55.7441 4 50.5303 4C49.2349 4 47.965 4.24613 46.8764 4.73154L12.3753 19.3828C7.45837 21.4624 4 26.335 4 32.0005V50.5314C4 55.76 8.23869 60 13.4692 60C14.7956 60 16.0572 59.7255 17.2043 59.2326L51.5586 44.6462C56.5098 42.5805 59.9991 37.6916 59.9991 32.0005L59.9982 13.424Z"
        fill="#FC4C02"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M28.2579 39.4393C27.8561 39.4393 27.5299 39.0781 27.5299 38.6326V21.5909C27.5299 21.1452 27.8561 20.7834 28.2579 20.7834C28.6604 20.7834 28.9865 21.1452 28.9865 21.5909V38.6326C28.9865 39.0781 28.6604 39.4393 28.2579 39.4393Z"
        fill="white"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M34.5889 38.6783V25.3537C34.5889 24.9026 34.2625 24.537 33.8589 24.537C33.4576 24.537 33.1323 24.9026 33.1323 25.3537V38.6783C33.1323 39.1294 33.4576 39.4953 33.8589 39.4953C34.2625 39.4953 34.5889 39.1294 34.5889 38.6783Z"
        fill="white"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M34.5889 21.5328V21.4909C34.5889 21.1004 34.2625 20.7834 33.8589 20.7834C33.4576 20.7834 33.1323 21.1004 33.1323 21.4909V21.5328C33.1323 21.9236 33.4576 22.24 33.8589 22.24C34.2625 22.24 34.5889 21.9236 34.5889 21.5328Z"
        fill="white"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M23.1988 37.6429C23.5207 37.3239 23.5207 36.8064 23.1988 36.488C22.8769 36.1684 22.3556 36.1684 22.0355 36.488C19.6598 38.8419 15.797 38.8419 13.4222 36.488C11.0473 34.1305 11.0473 30.2971 13.4222 27.9413C14.5721 26.8004 16.102 26.1717 17.7277 26.1717C19.3556 26.1717 20.8838 26.8004 22.0336 27.9413C22.3556 28.2611 22.8769 28.2611 23.1988 27.9413C23.5207 27.6216 23.5207 27.1049 23.1988 26.7854C21.7379 25.3353 19.7951 24.537 17.7277 24.537C15.6613 24.537 13.7189 25.3353 12.2571 26.7854C9.24032 29.7784 9.24032 34.6483 12.2571 37.6429C13.7657 39.1397 15.7459 39.8875 17.7286 39.8875C19.7092 39.8875 21.6902 39.1397 23.1988 37.6429Z"
        fill="white"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M40.3688 42.7696V32.1964C40.3688 28.8722 43.0783 26.1674 46.4101 26.1674C49.7412 26.1674 52.4516 28.8722 52.4516 32.1964C52.4516 35.5211 49.7412 38.2249 46.4101 38.2249C44.4893 38.2249 43.1894 37.4926 43.1794 37.4884C42.7906 37.2606 42.2892 37.3897 42.0611 37.7784C41.8339 38.1676 41.9643 38.6666 42.3529 38.8954C42.42 38.9345 44.0233 39.8559 46.4101 39.8559C50.6426 39.8559 54.085 36.4198 54.085 32.1964C54.085 27.9728 50.6426 24.537 46.4101 24.537C42.1773 24.537 38.7345 27.9728 38.7345 32.1964V42.7696C38.7345 43.2192 39.101 43.5851 39.5516 43.5851C40.0026 43.5851 40.3688 43.2192 40.3688 42.7696Z"
        fill="white"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M59.8557 48.179C59.8557 49.479 58.8027 50.532 57.5027 50.532C56.2027 50.532 55.1497 49.479 55.1497 48.179C55.1497 46.879 56.2027 45.826 57.5027 45.826C58.8027 45.826 59.8557 46.879 59.8557 48.179ZM59.4852 48.179C59.4852 47.074 58.5947 46.1705 57.5027 46.1705C56.4107 46.1705 55.5267 47.074 55.5267 48.179C55.5267 49.284 56.4107 50.1875 57.5027 50.1875C58.5947 50.1875 59.4852 49.284 59.4852 48.179ZM58.4907 49.466H58.0747L57.4832 48.413H57.0932V49.466H56.7357V46.8855H57.6132C58.0617 46.8855 58.4257 47.2235 58.4257 47.659C58.4257 48.036 58.1917 48.27 57.8732 48.3675L58.4907 49.466ZM58.0617 47.659C58.0617 47.399 57.8602 47.204 57.5742 47.204H57.0932V48.1075H57.5742C57.8602 48.1075 58.0617 47.919 58.0617 47.659Z"
        fill="#FC4C02"
        fillRule="evenodd"
      />
    </svg>
  </SvgIcon>
)

export default Logo

Logo.propTypes = {
  size: PropTypes.number,
}

Logo.defaultProps = {
  size: 1.5,
}
