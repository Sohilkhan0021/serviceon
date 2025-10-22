import { Fragment } from 'react';
import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading
} from '@/partials/toolbar';
import { LaborRatesContent } from '.';
import { useLayout } from '@/providers';

const LaborRatesPage = () => {
  const { currentLayout } = useLayout();

  return (
    <Fragment>
      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarDescription>
                <div className="flex items-center flex-wrap gap-1.5 font-medium">
                  <span className="text-md text-gray-700">Configure default labor rates for your garage</span>
                </div>
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <a href="#" className="btn btn-sm btn-light">
                Reset to Default
              </a>
              <a href="#" className="btn btn-sm btn-primary">
                Save Changes
              </a>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <LaborRatesContent />
      </Container>
    </Fragment>
  );
};

export { LaborRatesPage };
