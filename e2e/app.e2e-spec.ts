import { ProyectoNuevoPage } from './app.po';

describe('proyecto-nuevo App', function() {
  let page: ProyectoNuevoPage;

  beforeEach(() => {
    page = new ProyectoNuevoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
