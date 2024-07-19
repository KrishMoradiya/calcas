import PropTypes from "prop-types";

export const CustomButtonPropTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf(['primary', 'secondary', 'success', 'info', 'warning', 'danger','text']),
    ]),
    variant: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf(['contained','outlined','text','dashed','dotted']),
    ]),
    isMenuButton: PropTypes.bool,
    isMenuListOpen: PropTypes.bool,
    onClick: PropTypes.func,
    fontColor: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf(['primary', 'secondary', 'success', 'info', 'warning', 'danger','text'])
    ]),
    fontFamily: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf(['Raleway','Roboto'])
    ]),
    paddingX: PropTypes.number,
    paddingY: PropTypes.number,
    fontWeight: PropTypes.number,
    fontStyle: PropTypes.string,
    fontSize: PropTypes.string,
    lineHeight: PropTypes.string
};

export const CustomButtonDefaultProps = {
    title: 'Click Here',
    color: 'primary',
    variant: 'contained',
    isMenuButton: false,
    isMenuListOpen: false,
    onClick: function (){
        console.log("Button Called")
    },
    fontColor: 'text',
    fontFamily: 'Raleway',
    paddingX: 2,
    paddingY: 2,
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '20px',
    lineHeight: '23px'
}
