from django.shortcuts import render
from django.contrib import messages
from App.models import Contact


def home(request):
    form_data = {
        'name': '',
        'email': '',
        'number': '',
        'content': '',
    }

    if request.method == 'POST':
        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        number = request.POST.get('number', '').strip()
        content = request.POST.get('content', '').strip()

        form_data.update({
            'name': name,
            'email': email,
            'number': number,
            'content': content,
        })

        if not (2 < len(name) < 30):
            messages.error(request, 'Name must be between 3 and 29 characters.')
        elif '@' not in email or len(email) < 5:
            messages.error(request, 'Please enter a valid email address.')
        elif not (9 < len(number) < 13 and number.isdigit()):
            messages.error(request, 'Please enter a valid phone number.')
        elif not content or len(content) > 400:
            messages.error(request, 'Please enter a message up to 400 characters.')
        else:
            Contact.objects.create(
                name=name,
                email=email,
                number=number,
                content=content,
            )
            messages.success(request, 'Thank you! Your message has been sent.')
            form_data = {
                'name': '',
                'email': '',
                'number': '',
                'content': '',
            }

    return render(request, 'home.html', {'form_data': form_data})
