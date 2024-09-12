interface IArgs {
  args: string;
}

export default function Hello({ args }: IArgs) {
  console.log(args);

  return <></>;
}
