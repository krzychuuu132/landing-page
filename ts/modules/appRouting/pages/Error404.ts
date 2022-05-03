export let Error404 = {
  render: async () => {
    let view = /*html*/ `
          <h1>Coś poszło nie tak :(</h1>  
          `;
    return view;
  },
  after_render: () => {},
};
