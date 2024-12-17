/**
 * This is a scaffold file meant for customization.
 * Delete the file and run the code generator again to have it reset
 */

import { actions as BaseActions, DocumentModel } from "document-model/document";
import { actions as AtlasMultiParentActions, AtlasMultiParent } from "./gen";
import { reducer } from "./gen/reducer";
import { documentModel } from "./gen/document-model";
import genUtils from "./gen/utils";
import * as customUtils from "./src/utils";
import {
  AtlasMultiParentState,
  AtlasMultiParentAction,
  AtlasMultiParentLocalState,
} from "./gen/types";

const Document = AtlasMultiParent;
const utils = { ...genUtils, ...customUtils };
const actions = { ...BaseActions, ...AtlasMultiParentActions };

export const module: DocumentModel<
  AtlasMultiParentState,
  AtlasMultiParentAction,
  AtlasMultiParentLocalState
> = {
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export { AtlasMultiParent, Document, reducer, actions, utils, documentModel };

export * from "./gen/types";
export * from "./src/utils";
