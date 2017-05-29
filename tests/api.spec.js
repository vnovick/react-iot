'use strict';

import { expect } from 'chai';
import * as api from '../src';

describe('Package Api', function() {
    it('Should have all exported methods', () => {
      expect(api.render).to.exist;
    })
});
