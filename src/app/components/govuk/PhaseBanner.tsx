import Tag from './Tag'
import WidthContainer from './WidthContainer';

const PhaseBanner = () => {
  return (
    <WidthContainer>
      <div className='govuk-phase-banner'>
        <p className='govuk-phase-banner__content'>
          <Tag text={`Alpha`} additionalClasses={`govuk-phase-banner__content__tag`} />
          <span className='govuk-phase-banner__text'>
            This is a new service will help us to improve it.
          </span>
        </p>
      </div>
    </WidthContainer>
  );
};

export default PhaseBanner;
