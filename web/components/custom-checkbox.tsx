import {Checkbox, User, cn} from "@nextui-org/react";

type user = {
  name: string,
  avatar: string,
}

export const CustomCheckbox = ({ user, value }: { user:user, value:string }) => {
  return (
    <Checkbox
      aria-label={user.name}
      classNames={{
        base: cn(
          "inline-flex max-w-xs w-full bg-content1 m-0",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
        label: "w-full",
      }}
      value={value}
    >
      <div className="w-full flex justify-between gap-2">
        <User
          avatarProps={{ size: "md", src: user.avatar }}
          name={user.name}
        />
      </div>
    </Checkbox>
  );
};