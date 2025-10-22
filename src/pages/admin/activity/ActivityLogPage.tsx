import { Fragment } from 'react';
import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading
} from '@/partials/toolbar';
import { ActivityLogContent } from '.';
import { useLayout } from '@/providers';

const ActivityLogPage = () => {
  const { currentLayout } = useLayout();

  return (
    <Fragment>
      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarDescription>
                <div className="flex items-center flex-wrap gap-1.5 font-medium">
                  <span className="text-md text-gray-700">System Activity:</span>
                  <span className="text-md text-gray-800 font-medium me-2">1,247</span>
                  <span className="text-md text-gray-700">events today</span>
                </div>
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <a href="#" className="btn btn-sm btn-light">
                Export CSV
              </a>
              <a href="#" className="btn btn-sm btn-primary">
                Refresh
              </a>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <ActivityLogContent />
      </Container>
    </Fragment>
  );
};

export { ActivityLogPage };
