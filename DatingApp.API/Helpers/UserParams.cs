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
    }
}