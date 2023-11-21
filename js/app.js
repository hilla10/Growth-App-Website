// FAQ Accordion 
document.addEventListener('DOMContentLoaded', () => {
            const faqContainer = document.querySelector('.faq-content');

            faqContainer.addEventListener('click', (e) => {
                const groupHeader = e.target.closest('.faq-group-header');

                if (!groupHeader) return;

                const group = groupHeader.parentElement;
                const groupBody = group.querySelector('.faq-group-body');
                const icon = groupHeader.querySelector('i');

                // Toggle icon
                icon.classList.toggle('fa-plus');
                icon.classList.toggle('fa-minus');

                // Toggle visibility of body
                groupBody.classList.toggle('open');

                // Close other open FAQ bodies
                const otherGroups = faqContainer.querySelectorAll('.faq-group');

                otherGroups.forEach((otherGroup) => {
                    if (otherGroup !== group) {
                        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                        const otherIcon = otherGroup.querySelector('.faq-group-header i');

                        otherGroup.classList.remove('open');
                        otherIcon.classList.remove('fa-minus');
                        otherIcon.classList.add('fa-plus');
                    }
                })
                });
            });


            const menu = document.querySelector('.hamburger');
            const nav = document.querySelector('.mobile-menu')



            menu.addEventListener('click', function () {
                menu.classList.toggle('active');
                nav.classList.toggle('active');
            })