import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('inquiry-detail-page', 'Integration | Component | inquiry detail page', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{inquiry-detail-page}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#inquiry-detail-page}}
      template block text
    {{/inquiry-detail-page}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
