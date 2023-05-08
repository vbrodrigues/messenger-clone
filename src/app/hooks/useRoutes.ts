import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(() => {
    return [
      {
        label: "Chat",
        href: "/conversations",
        icon: HiChat,
        active: pathname === "/coversations" || !!conversationId,
      },
      {
        label: "users",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
      {
        label: "Logout",
        href: "#",
        onClick: () => signOut(),
        icon: HiArrowLeftOnRectangle,
      },
    ];
  }, [conversationId, pathname]);

  return routes;
};

export default useRoutes;
