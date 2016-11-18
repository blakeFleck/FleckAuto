var searchTypeForm = (options, callback) => {
  $.get( 'https://api.typeform.com/v1/form/Lqk9y0',
    {
     key: '0b9e9062abdb0dc38072937248e4598b93651290',
     completed: true

    },
    function(obj) {
      console.log(JSON.stringify(obj, null, 2));
      callback(obj);
    });
};

window.searchTypeForm = searchTypeForm;