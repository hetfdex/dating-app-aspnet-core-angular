namespace DatingApp.API.Helpers
{
    public class UserParams
    {
        private const int maxItemsPerPage = 50;

        private int itemsPerPage = 10;

        public int CurrentPage { get; set; } = 1;

        public int ItemsPerPage
        {
            get
            {
                return itemsPerPage;
            }
            set
            {
                itemsPerPage = (value > maxItemsPerPage) ? maxItemsPerPage : value;
            }
        }

        public int UserId { get; set; }
        public int MinAge { get; set; } = 18;
        public int MaxAge { get; set; } = 99;

        public string Gender { get; set; }
    }
}