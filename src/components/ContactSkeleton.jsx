const ContactSkeleton = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="space-y-2">
          <div className="w-32 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-48 h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
      <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
    </div>
  );
};

export default ContactSkeleton;
