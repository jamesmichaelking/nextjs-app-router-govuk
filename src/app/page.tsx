import * as GovUK from './components/govuk';

const Home = () => {
  return (
    <GovUK.WidthContainer>
        <GovUK.Main>
          <GovUK.GridRow>

            <GovUK.GridCol>
              <h1 className={`govuk-heading-l`}>Page heading</h1>
                <GovUK.Input id="field" name="fieldName" value="Steve" label="First name" />
                <GovUK.Input id="field2" name="fieldName2" value="Davis" label="Last name" error='Error message here' />
                <GovUK.Button label="Click and do something" />
            </GovUK.GridCol>
            <GovUK.GridCol size={'one-third'}>
              <p className={`govuk-body`}>Extra content here</p>
            </GovUK.GridCol>
          </GovUK.GridRow>
        </GovUK.Main>
      </GovUK.WidthContainer>
  );
}

export default Home