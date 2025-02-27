/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { faker } from '@faker-js/faker';
import _ from 'lodash';

export const multipleSelect = {
  options: (options) => ({
    interface: 'multipleSelect',
    type: 'array',
    defaultValue: [],
    // name,
    uiSchema: {
      type: 'array',
      'x-component': 'Select',
      'x-component-props': {
        mode: 'multiple',
      },
      enum: options?.uiSchema?.enum || [
        { value: 'option1', label: 'Option1', color: 'red' },
        { value: 'option2', label: 'Option2', color: 'green' },
        { value: 'option3', label: 'Option3', color: 'blue' },
      ],
    },
  }),
  mock: (options) => faker.helpers.arrayElements(_.map(options?.uiSchema?.enum, _.property('value'))),
};
