import { EditorProps } from "document-model/document";
import {
  AtlasSectionState,
  AtlasSectionAction,
  AtlasSectionLocalState,
  actions,
} from "../../document-models/atlas-section";
import { utils as documentModelUtils } from "document-model/document";
import { Button } from "@powerhousedao/design-system";

export type IProps = EditorProps<
  AtlasSectionState,
  AtlasSectionAction,
  AtlasSectionLocalState
>;

export default function Editor(props: IProps) {
  // generate a random id
  // const id = documentModelUtils.hashKey();

  return (
    <div>
      <Button onClick={() => console.log("Hello world!")}>My Button</Button>
    </div>
  );
}
