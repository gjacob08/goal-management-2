import React from 'react';

import Card from '../layout/Card';

const ToDoForm = (props) => {
  return (
    <Card>
      <form name="student_application" id="student_application" action="">
        <div className="py-4 px-8">
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              Student ID:
            </label>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default ToDoForm;
