// @refresh reload
import { mount, StartClient } from '@solidjs/start/client';

/** The client handler. */
// biome-ignore lint/style/noNonNullAssertion: DOM element is guaranteed to exist
export default mount(() => <StartClient />, document.getElementById('app')!);
