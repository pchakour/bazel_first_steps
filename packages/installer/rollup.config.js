/**
 * Copyright © 2019-2021 Thales Global Services
 *
 * Licensed under the Thales Inner Source Software License:
 *
 * Version 1.2, InnerRestricted - Distribution Controlled
 * Rights are granted to the following entit(y)ies only:
 * AVS France, Thales Canada
 *
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://gitlab.thalesdigital.io/innersource/licenses
 * See the License for the specific language governing permissions and limitations under the License.
 */

import commonJS from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
  onwarn: (warning) => {
    // Always fail on warnings, assuming we don't know which are harmless.
    // We can add exclusions here based on warning.code, if we discover some
    // types of warning should always be ignored under bazel.
    throw new Error(warning.message);
  },
  plugins: [nodeResolve(), commonJS({
    include: 'node_modules/**'
  }),
  json({ preferConst: true }),],
};