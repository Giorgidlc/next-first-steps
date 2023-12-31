
export default function PublicLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello Root Layout Root Name</h1>
      { children }
    </div>
  );
}