import { Logger } from '@gulab-client/logger';

export default async function copyTextToClipboard(text: string) {
  try {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    }

    if (document.execCommand) {
      return document.execCommand('copy', true, text);
    }
  } catch (error) {
    Logger.logError(error as Error);
  }

  throw new Error('Failed to execute copyTextToClipboard');
}
