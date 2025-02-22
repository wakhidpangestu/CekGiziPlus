import ChatInterface from "@/components/Chat/ChatInterface";

const ChatPage = () => {
  return (
    <div className="h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)] bg-gray-50">
      <div className="h-full w-full">
        <ChatInterface />
      </div>
    </div>
  );
};

export default ChatPage;
