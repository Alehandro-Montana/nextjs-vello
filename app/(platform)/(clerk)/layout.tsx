const ClerkLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
   
    <div className="h-full flex items-center justify-center" style={{ backgroundImage: 'url("/left-background-image.jpg"), url("/right-background-image.jpg")', backgroundSize: '40%, 40%', backgroundPosition: 'left, right', backgroundRepeat: 'no-repeat' }}>
    {children}
  </div>
  );
};

export default ClerkLayout;

