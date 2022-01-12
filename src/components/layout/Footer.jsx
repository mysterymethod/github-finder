function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-4 footer bg-base-300 text-base-content footer-center">
      <div>
        <p>Copyright © {currentYear} - All right reserved by Pranoy Chandra Ltd</p>
      </div>
    </footer>
  );
}

export default Footer;
