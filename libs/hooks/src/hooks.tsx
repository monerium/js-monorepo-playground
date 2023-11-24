/* eslint-disable-next-line */
export interface HooksProps {}

export function useSharedHook(props: HooksProps) {
  return (
    <div>
      <h1>Here is the message from the shared hook located in libs/hooks!</h1>
    </div>
  );
}

export default useSharedHook;
