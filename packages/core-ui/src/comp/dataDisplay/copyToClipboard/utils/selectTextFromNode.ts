import { Logger } from '@gulab-client/logger';

export default function selectTextFromNode(element: Node) {
  try {
    if (window.getSelection && window.document.createRange) {
      const selection = window.getSelection();
      const range = window.document.createRange();
      range.selectNodeContents(element);

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  } catch (error) {
    Logger.logError(error as Error);
  }
}
